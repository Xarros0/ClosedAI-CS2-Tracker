// import React, { useState } from 'react';
// import MainNavbar from '../components/mainNavbar';

// const Search: React.FC = () => {

//     return (
//         <div style={foreground}>
//             <MainNavbar />
//             <h1 style={{ marginTop: '50px' }}>Searched for:</h1>
            
//             <div style={tableContainerStyles}>
//                 <h2></h2>
//                 <div style={tableStyles}>
//                     <div style={headerRowStyles}>
//                         <div style={headerCellStyles}>Players</div>
//                     </div>
//                     <div style={{ ...scrollableContainer, maxHeight: '200px' }}>
//                         {playerResults.map((player, index) => (
//                             <div key={index} style={rowStyles}>
//                                 <div style={cellStyles}>{player}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div style={tableContainerStyles}>
//                 <h2></h2>
//                 <div style={tableStyles}>
//                     <div style={headerRowStyles}>
//                         <div style={headerCellStyles}>Teams</div>
//                     </div>
//                     <div style={{ ...scrollableContainer, maxHeight: '200px' }}>
//                         {teamResults.map((team, index) => (
//                             <div key={index} style={rowStyles}>
//                                 <div style={cellStyles}>{team}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div style={tableContainerStyles}>
//                 <h2></h2>
//                 <div style={tableStyles}>
//                     <div style={headerRowStyles}>
//                         <div style={headerCellStyles}>Articles</div>
//                     </div>
//                     <div style={{ ...scrollableContainer, maxHeight: '200px' }}>
//                         {articleResults.map((article, index) => (
//                             <div key={index} style={rowStyles}>
//                                 <div style={cellStyles}>{article}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const foreground: React.CSSProperties = {
//     boxSizing: 'border-box',
//     position: 'absolute',
//     width: '94%',
//     height: '120%',
//     background: '#A2AEBB',
//     border: '1px solid #000000',
//     marginTop: '0px',
//     marginLeft: '50px',
//     marginRight: '50px',
//     overflow: 'hidden',
// };

// const tableContainerStyles: React.CSSProperties = {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '20px',
// };

// const tableStyles: React.CSSProperties = {
//     width: '1275px',
//     height: '300px',
//     background: '#D9D9D9',
// };

// const headerRowStyles: React.CSSProperties = {
//     width: '100%',
//     height: '96px',
//     background: '#AFAFAF',
//     display: 'flex',
//     alignItems: 'center',
// };

// const headerCellStyles: React.CSSProperties = {
//     flex: 1,
//     fontFamily: 'Roboto',
//     fontStyle: 'normal',
//     fontWeight: 500,
//     fontSize: '40px',
//     lineHeight: '47px',
//     color: '#000000',
// };

// const rowStyles: React.CSSProperties = {
//     width: '100%',
//     height: '47px',
//     display: 'flex',
//     alignItems: 'center',
// };

// const cellStyles: React.CSSProperties = {
//     flex: 1,
//     fontFamily: 'Roboto',
//     fontStyle: 'normal',
//     fontWeight: 500,
//     fontSize: '40px',
//     lineHeight: '47px',
//     color: '#000000',
// };

// const scrollableContainer: React.CSSProperties = {
//     overflowY: 'auto', // Enable vertical scrollbar
//     paddingRight: '17px', // Adjust for scrollbar to avoid shifting
// };

// export default Search;
