'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function AUCalBooking() {
	useEffect(() => {
		(async function () {
			const cal = await getCalApi({});

			cal('ui', {
				styles: { branding: { brandColor: '#be123c' } },
				hideEventTypeDetails: false,
				layout: 'column_view',
			});
		})();
	}, []);

	return (
		<Cal
			calLink="worldwideaccess/initial-consult-aus"
			style={{ width: '100%', height: '100%', overflow: 'scroll' }}
			config={{ layout: 'column_view' }}
		/>
	);
}
