import { useState, useRef } from 'react';
import '../styles/accordion.css';

const faqs = [
    {
        id: 1,
        header: "How do I map my API credentials in Treblle?",
        text: `You can set your credentials using environment variables. Assign your:\n
        - **API ID** to \`TREBLLE_PROJECT_ID\`\n- **SDK Token** to \`TREBLLE_API_KEY\`\n
        Verify these values come from your current Treblle 3.0 workspace configuration. Check [How to get started.](https://docs.treblle.com/guides/getting-started/)`
    },
    {
        id: 2,
        header: "My API requests aren’t showing up on the dashboard.",
        text: `First, confirm that you are accessing [platform.treblle.com](https://platform.treblle.com/) instead of the legacy URL ([app.treblle.com](http://app.treblle.com/)).\n
        - Verify that the environment variables \`TREBLLE_PROJECT_ID\` and \`TREBLLE_API_KEY\` match your current 3.0 workspace configuration.
        - Check that your outbound network/firewall settings permit HTTPS requests to all **\`*.treblle.com\`** endpoints.
        - Ensure your API traffic does not exceed the **monthly request cap** defined by your plan.`
    },
    {
        id: 3,
        header: "How does Treblle handle security and privacy ?",
        text: `Treblle prioritizes security and privacy:\n
    - Sensitive fields such as passwords and API keys are **automatically detected and masked**.
    - All data is **encrypted in transit and at rest**.
    - You have full control over what data you log and can **exclude specific fields** in your [SDK configuration](https://docs.treblle.com/integrations/).
    - Treblle offers [compliance scanning](https://docs.treblle.com/features/api-compliance/) to help detect vulnerabilities.
    - Treblle is committed to maintaining high-security standards and is **ISO 27001, GDPR, AICPA SOC 2, CCPA READY, and PCI DSS COMPLIANT**.\n
    Our rigorous assessment process ensures that our infrastructure, sub-processors, third-party vendors, and employees adhere to strict security policies.
    
    Learn more about [How we handle Security](https://docs.treblle.com/security/).`
    },
    {
        id: 4,
        header: "How can I mask sensitive parts of my endpoints (like dynamic keys in URLs)?",
        text: `Treblle only **masks data** in request/response bodies and headers, **not** the URL path. You have two options if your endpoint URL contains sensitive information (e.g., dynamic keys).\n
        - **Exclude the endpoint entirely:** Use your framework’s middleware or routing controls to bypass Treblle’s logging on that endpoint.
        - **Redesign the URL:** Consider restructuring your endpoint so that sensitive values aren’t part of the path if they don’t need to be visible.

        Check how to [Mask Fields](https://docs.treblle.com/security/masking/) in Treblle.`
    },
    {
        id: 5,
        header: "How does Treblle generate API docs?",
        text: `Treblle **automatically creates documentation** from the API traffic.\n
        - When your API receives consistent requests to a new endpoint, Treblle analyzes the payloads and **generates documentation** based on that data.
        - If your documentation isn’t showing up, ensure you're **tracking endpoints correctly** and keeping request/response payloads in a **consistent format**.
        - For example, once a new endpoint is created and published, you can use **[Aspen](http://localhost:4321/aspen/)** to make an HTTP call and then see the API Docs on the Treblle Platform.\n
        Check [API documentation](https://docs.treblle.com/treblle/api-documentation/) for more information.`
    },
    {
        id: 6,
        header: "I upgraded my SDK but still see issues with keys or request logging.",
        text: `Double-check your **configuration**.\n
        - With **Treblle 3.0**, you can rely on **environment variables** instead of hardcoding keys in your integration code.
        - If your \`.env\` file already defines \`TREBLLE_API_KEY\` and \`TREBLLE_PROJECT_ID\`, **remove manual configuration** from your code.
        - This reduces the risk of mismatches between environments. Also, ensure you use the **latest SDK version** supporting Treblle 3.0 changes.`
    },
    {
        id: 7,
        header: "Do I need to change my DNS settings to work with Treblle?",
        text: `No. Treblle integrates **directly into your API backend** via our SDK.\n
        You continue using your **custom domain** as usual. Treblle monitors traffic by processing the **data sent by your application**, so **no DNS changes** are necessary.`
    },
    {
        id: 8,
        header: "I’m getting connection errors (e.g., SSL connection timeout) after deployment.",
        text: `Connection errors like **SSL timeouts** often point to **network-related issues**.\n
        Verify that your **deployment environment** can reach external services and that no **firewall rules or proxy settings** block outbound requests.
        
        Consider **adding retries** or **more detailed logging** around your SDK calls to diagnose intermittent delays when establishing **SSL connections** with Treblle’s servers.`
    },
    {
        id: 9,
        header: "How do I access my invoices in Treblle 3.0?",
        text: `**Invoices**  are unavailable via the dashboard for now.
        
        - Invoice PDFs and **payment links** are sent directly to the **email registered** with your Treblle account.
        - Check your **spam folder** or contact **[support](https://treblle.com/book-a-demo#)** with your account details if you don't see them.`
    },
    {
        id: 10,
        header: "What happens if I exceed the monthly request limit on the free plan?",
        text: `If your API reaches the **free plan’s 250K monthly request limit**, Treblle will stop processing new API calls until the **limit resets**.\n
        Monitor your **usage**, and if you expect higher traffic, consider **adjusting your plan** to avoid missing out on logging essential requests.\n
        Check [Pricing Plans](https://treblle.com/pricing).`
    },
    {
        id: 11,
        header: "Can I test Treblle locally?",
        text: `Yes. Requests from **localhost** are logged if:\n
        - The SDK is **initialized correctly**.
        - Your machine has **internet access**.
        - No **proxy blocks** traffic to Treblle’s endpoints.`
    },
];

const AccordionItem = ({ handleToggle, active, faq }) => {
    const contentEl = useRef();
    const { header, id, text } = faq;
    const isActive = active === id;

    const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
        .replace(/- (.*?)(\n|$)/g, '<li>$1</li>')
        .replace(/(?:\n<li>)/g, '<ul><li>')
        .replace(/(<\/li>\n)(?!<li>)/g, '$1</ul>');

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${isActive ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <span className="rc-accordion-icon">{isActive ? '−' : '+'}</span>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${isActive ? 'show' : ''}`} style={
                isActive
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0' dangerouslySetInnerHTML={{ __html: formattedText.replace(/\n/g, '<br/>') }}></p>
                </div>
            </div>
        </div>
    );
};

export const Accordion = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-2">
                    <div className="card">
                        <div className="card-body">
                            {faqs.map((faq) => (
                                <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
