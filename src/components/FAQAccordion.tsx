import { useState } from "react";

function FAQAccordion() {
    const faqs = [
      {
        q: 'What is My Lineage?',
        a: 'My Lineage is a comprehensive platform designed to help you explore, preserve, and share your family heritage through interactive family trees, rich storytelling, and secure legacy preservation.'
      },
      {
        q: 'How secure is My Lineage?',
        a: 'Security is paramount at My Lineage. We use state-of-the-art encryption and data protection measures to ensure that all your information is stored securely and is accessible only to authorized users defined by you.'
      },
      {
        q: 'What makes My Lineage different from other genealogy platforms?',
        a: "Unlike other platforms, My Lineage combines advanced genealogical tools with rich storytelling features and robust privacy controls. It's not just about tracing lineage but also about preserving the narratives that give depth to your family's history. Plus, our platform is designed to be accessible to users of all ages and technical skills."
      },
      {
        q: 'What plans are available, and how do they differ?',
        a: 'My Lineage is completely free to use! We believe everyone should have access to their family heritage without any barriers. All features, including our family tree builder, multimedia storytelling tools, and secure family networking, are available at no cost to all users. Enjoy full access to everything our platform offers without any subscription fees.'
      },
      {
        q: 'Can I control who sees my family information?',
        a: 'Absolutely. Privacy is a cornerstone of My Lineage. You have full control over who can view or add to your family tree through customizable privacy settings. You can set permissions for each family member, from viewing only to full editing capabilities.'
      },
      {
        q: 'How does the Family Tree Builder work?',
        a: 'Our Family Tree Builder is designed for ease of use. You start by adding yourself and then extend the tree by adding family members, linking relationships as you go. Our intuitive interface allows you to include personal details, attach stories, and upload photos for each family member, creating a rich, interactive family tree.'
      },
      {
        q: 'Can multiple family members edit the same family tree?',
        a: 'Absolutely, you can invite family members to collaborate on your family tree, each with customizable editing permissions.'
      },
      {
        q: 'Is My Lineage suitable for non-tech-savvy users?',
        a: "Yes, it is! We've designed My Lineage with all family members in mind. Our platform is intuitive, with easy navigation and simple tools for users who might not be comfortable with technology."
      },
      {
        q: 'What types of media can I upload to My Lineage?',
        a: 'My Lineage supports a wide range of media types, including photos, videos, audio recordings, and digital documents. This diversity allows you to enrich your family stories with multimedia elements.'
      },
      {
        q: 'How can I sign up for the waitlist?',
        a: "Simply enter your email address in the designated sign-up field on our landing page. You'll receive early access information and updates directly to your inbox."
      },
      {
        q: 'What happens after I join the waitlist?',
        a: "Once you sign up for our waitlist, you'll receive a confirmation email acknowledging your registration. We'll keep you updated with exclusive sneak peeks, early access opportunities, and the latest developments as we approach our official launch."
      },
      {
        q: 'What should I do if I have more questions about My Lineage?',
        a: "We're here to help! If you have any further questions or need assistance, feel free to reach out to us at hello@mylineage.co. Our dedicated team is eager to assist you and will respond to your inquiries as quickly as possible. Whether you have questions about features or just want to learn more about how My Lineage can enrich your family's story, don't hesitate to contact us."
      },
    ];
    const [open, setOpen] = useState(0);
    return (
      <div>
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border rounded shadow-sm mb-4">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              <span className="font-semibold text-lg">{idx + 1}. {faq.q}</span>
              <span className="ml-4 text-2xl">{open === idx ? '▲' : '▼'}</span>
            </button>
            {open === idx && (
              <div className="px-6 pb-6 text-base text-gray-800 animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

export default FAQAccordion;