package main

// Path netlify.toml file for Netlify Deploy Preview to allow some
// violation for CSP header.

import (
	"fmt"
	"io/ioutil"
	"log"
	"regexp"
	"strings"
)

const netlifyConfig = "netlify.toml"

func main() {
	input, err := ioutil.ReadFile(netlifyConfig)
	if err != nil {
		log.Fatalln(err)
	}

	lines := strings.Split(string(input), "\n")
	for i, line := range lines {
		newStr := line

		// -> default-src 'self';
		// <- default-src 'self' blob:;
		reStr := regexp.MustCompile("(default-src) ('self')(;)")
		repStr := "${1} ${2} blob:${3}"
		newStr = reStr.ReplaceAllString(newStr, repStr)

		// -> style-src 'self' cdn.hypothes.is;
		// <- style-src 'self' 'unsafe-inline' cdn.hypothes.is;
		reStr = regexp.MustCompile(`(style-src) ('self') (cdn\.hypothes\.is)(;)`)
		repStr = "${1} ${2} ${3} 'unsafe-inline'${4}"
		newStr = reStr.ReplaceAllString(newStr, repStr)

		// -> media-src 'self';
		// <- media-src 'self' blob: https://app.netlify.com;
		reStr = regexp.MustCompile("(media-src) ('self')(;)")
		repStr = "${1} ${2} blob: https://app.netlify.com${3}"
		newStr = reStr.ReplaceAllString(newStr, repStr)

		// -> frame-src hypothes.is;
		// <- frame-src hypothes.is app.netlify.com;
		reStr = regexp.MustCompile(`(frame-src) (hypothes\.is)(;)`)
		repStr = "${1} ${2} app.netlify.com${3}"
		newStr = reStr.ReplaceAllString(newStr, repStr)

		// -> script-src 'self' www.googletagmanager.com hypothes.is cdn.hypothes.is;
		// <- script-src 'self' www.googletagmanager.com hypothes.is cdn.hypothes.is netlify-cdp-loader.netlify.app;
		reStr = regexp.MustCompile(`(script-src) ('self' www\.googletagmanager\.com hypothes\.is cdn\.hypothes\.is)(;)`)
		repStr = "${1} ${2} netlify-cdp-loader.netlify.app${3}"
		newStr = reStr.ReplaceAllString(newStr, repStr)

		lines[i] = newStr
	}

	output := strings.Join(lines, "\n")
	err = ioutil.WriteFile(netlifyConfig, []byte(output), 0644)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("Done")
}
