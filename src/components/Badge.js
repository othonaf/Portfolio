import React, { useEffect } from 'react';
import { CardBadge } from '../styled';

function Badge({ badgeId, width, height }) {
    useEffect(() => {
        if (!document.getElementById('credly-script')) {
            const script = document.createElement('script');
            script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
            script.async = true;
            script.id = 'credly-script';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <CardBadge
            data-iframe-width={width}
            data-iframe-height={height}
            data-share-badge-id={badgeId}
            data-share-badge-host="https://www.credly.com"
        ></CardBadge>
    );
}

export default Badge;
