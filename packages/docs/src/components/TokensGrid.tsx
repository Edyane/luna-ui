// import '../styles/tokens-grid.css'

// interface TokensGridProps {
//   tokens: Record<string, string>
//   hasRemValues?: boolean
// }

// export function TokensGrid({ tokens, hasRemValues }: TokensGridProps) {
//   return (
//     <table className="tokens-grid">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Value</th>
//           {hasRemValues && <th>Pixels</th>}
//         </tr>
//       </thead>

//       <tbody>
//         {Object.entries(tokens).map(([key, value]) => {
//           return (
//             <tr key={key}>
//               <td>{key}</td>
//               <td>{value}</td>
//               {hasRemValues && (
//                 <td>{Number(value.replace('rem', '')) * 16}px</td>
//               )}
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   )
// }

// import '../styles/tokens-grid.css';

// interface TokensGridProps {
//   tokens: Record<string, string>;
//   hasRemValues?: boolean;
// }

// export function TokensGrid({ tokens, hasRemValues }: TokensGridProps) {
//   return (
//     <table className="tokens-grid">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Value</th>
//           {hasRemValues && <th>Pixels</th>}
//         </tr>
//       </thead>

//       <tbody>
//         {Object.entries(tokens).map(([key, value]) => {
//           return (
//             <tr key={key} style={{ backgroundColor: value }}>
//               <td>{key}</td>
//               <td>{value}</td>
//               {hasRemValues && (
//                 <td>{Number(value.replace('rem', '')) * 16}px</td>
//               )}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }


import '../styles/tokens-grid.css';

interface TokensGridProps {
	tokens: Record<string, string>;
}

function getContrastTextColor(bgColor: string): string {
	// Remove '#' if present
	if (bgColor.startsWith('#')) {
		bgColor = bgColor.slice(1);
	}

	// Convert 3-digit hex to 6-digit hex
	if (bgColor.length === 3) {
		bgColor = bgColor[0] + bgColor[0] + bgColor[1] + bgColor[1] + bgColor[2] + bgColor[2];
	}

	const r = parseInt(bgColor.substr(0, 2), 16);
	const g = parseInt(bgColor.substr(2, 2), 16);
	const b = parseInt(bgColor.substr(4, 2), 16);

	// Calculate the luminance
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	return luminance > 0.5 ? '#000000' : '#ffffff';
}

export function TokensGrid({ tokens }: TokensGridProps) {
	return (
		<div className="tokens-grid">
			{Object.entries(tokens).map(([key, value]) => {
				const textColor = getContrastTextColor(value);
				return (
					<div
						key={key}
						className="swatch"
						style={{ backgroundColor: value, color: textColor }}
					>
						<div className="swatch-content">
							<div className="swatch-name">{key}</div>
							<div className="swatch-value">{value}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
