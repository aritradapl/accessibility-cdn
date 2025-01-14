(function (d) {
    // Default settings
    const defaultSettings = {
        position: 3,              // Default position (bottom-right)
        size: "large",            // Default size ("small" or "large")
        language: "en",           // Default language (e.g., "en", "fr", "es")
        color: "#00796b",         // Default color (hex code)
        type: 1,                  // Default type (1=person, 2=wheelchair, 3=eye, 4=text)
        statementText: "Our Accessibility Statement",  // Default text for the accessibility statement
        statementUrl: "http://www.example.com/accessibility", // Default URL for the statement
        mobileSupport: true,      // Default: support on mobile devices
        triggerId: null,          // Custom trigger ID (optional)
        account: "h3k9anwz6b",    // Default account ID (custom)
    };

    // Create the script element
    const scriptElement = d.createElement("script");

    // Apply the attributes, with fallbacks if not provided
    const providedSettings = {
        position: scriptElement.getAttribute("data-position") || defaultSettings.position,
        size: scriptElement.getAttribute("data-size") || defaultSettings.size,
        language: scriptElement.getAttribute("data-language") || defaultSettings.language,
        color: scriptElement.getAttribute("data-color") || defaultSettings.color,
        type: scriptElement.getAttribute("data-type") || defaultSettings.type,
        statementText: scriptElement.getAttribute("data-statement_text") || defaultSettings.statementText,
        statementUrl: scriptElement.getAttribute("data-statement_url") || defaultSettings.statementUrl,
        mobileSupport: scriptElement.getAttribute("data-mobile") !== null ? scriptElement.getAttribute("data-mobile") === "true" : defaultSettings.mobileSupport,
        triggerId: scriptElement.getAttribute("data-trigger") || defaultSettings.triggerId,
        account: scriptElement.getAttribute("data-account") || defaultSettings.account,
    };

    // Set all attributes to the <script> tag 
    if (providedSettings.position) scriptElement.setAttribute("data-position", providedSettings.position);
    if (providedSettings.size) scriptElement.setAttribute("data-size", providedSettings.size);
    if (providedSettings.language) scriptElement.setAttribute("data-language", providedSettings.language);
    if (providedSettings.color) scriptElement.setAttribute("data-color", providedSettings.color);
    if (providedSettings.type) scriptElement.setAttribute("data-type", providedSettings.type);
    if (providedSettings.statementText) scriptElement.setAttribute("data-statement_text", providedSettings.statementText);
    if (providedSettings.statementUrl) scriptElement.setAttribute("data-statement_url", providedSettings.statementUrl);
    if (providedSettings.mobileSupport !== null) scriptElement.setAttribute("data-mobile", providedSettings.mobileSupport);
    if (providedSettings.triggerId) scriptElement.setAttribute("data-trigger", providedSettings.triggerId);
    if (providedSettings.account) scriptElement.setAttribute("data-account", providedSettings.account);

    // Append the script to the <head> or <body>
    (d.body || d.head).appendChild(scriptElement);

    console.log("Accessibility widget injected successfully with settings:", providedSettings);
})(document);
