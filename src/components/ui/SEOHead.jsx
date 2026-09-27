import { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';

export default function SEOHead({ title, description, schemaData }) {
  useEffect(() => {
    // Update Page Title
    const fullTitle = title 
      ? `${title} | ${BUSINESS_CONFIG.businessName}` 
      : BUSINESS_CONFIG.seo.siteTitle;
    document.title = fullTitle;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || BUSINESS_CONFIG.seo.defaultDescription);
    }

    // Update Schema.org if provided
    if (schemaData) {
      let scriptTag = document.getElementById('schema-jsonld');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'schema-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    }
  }, [title, description, schemaData]);

  return null;
}
