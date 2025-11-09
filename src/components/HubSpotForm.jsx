import React, { useEffect } from 'react';

const HubSpotForm = ({ portalId, formId, targetId }) => {
    useEffect(() => {
        const createForm = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId,
                    formId,
                    target: `#${targetId}`,
                });
            }
        };

        // Only inject script if not already loaded
        if (!window.hbspt) {
            const script = document.createElement('script');
            script.src = 'https://js.hsforms.net/forms/v2.js';
            script.async = true;
            script.onload = createForm;
            document.body.appendChild(script);
        } else {
            createForm();
        }

        return () => {
            const node = document.getElementById(targetId);
            if (node) node.innerHTML = '';
            // Clean up any overlays/iframes HubSpot injected
            document.querySelectorAll("iframe[src*='hubspot']").forEach(el => el.remove());
            document.querySelectorAll(".hs-form-overlay").forEach(el => el.remove());
            // DO NOT remove the script tag here or you risk breaking global window.hbspt
        };
    }, [portalId, formId, targetId]);

    return <div id={targetId}></div>;
};

export default HubSpotForm;
