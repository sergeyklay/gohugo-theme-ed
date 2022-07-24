---
title: Contact
description: We'd love to hear from you
semanticType: contact
annotations: false
---

This is an example of a custom shortcode that you can put right into your content.
You will need to add a form action to the the shortcode to make it work.
Check out {{< link src="https://formspark.io/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Formspark{{< /link >}} for a simple, free form service.

Ed theme is not strictly tied to any forms backend. You can easily use any backend
like {{< link src="https://formspark.io/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Formspark{{< /link >}}, {{< link src="https://formspree.io/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Formspree{{< /link >}}, {{< link src="https://fabform.io/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}FabForm{{< /link >}} and so on just by changing the `formAction` parameter
in the site configuration file.

For a more subtle configuration of the contact form itself, you can also replace
`layouts/shortcodes/form-contact.html` partial in project wide level.

{{< form-contact >}}
