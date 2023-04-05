import React from 'react';
import cardLayout from './information-layout.module.css';

function CardLayout({ children }: { children: React.ReactNode }) {
	return <div className={cardLayout.informationLayout}>{children}</div>;
}

export default CardLayout;
