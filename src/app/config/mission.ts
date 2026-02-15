export const missionImages = [
    "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771085233/Frame_13_fptrik.png",
    "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771085233/Frame_13_1_ihbily.png",
    "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771128321/Frame_13_uwn0s0.svg",
    "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771085233/Frame_13_3_thythz.png",
];




// Internal Configuration Constants
const GEOMETRY = {
    cx: 410, // Canvas Center X
    cy: 400, // Canvas Center Y
    svgRadius: 290,
    centerOffset: 10,
    itemOffset: 70,
    radialElongation: 60,
    biasX: 490,
    biasY: 400,
};

// Curve Style Definitions
const CURVE_STYLES = [
    // Concave Up Group
    { cpOffset: 199, width: 1.5, opacity: 0.9 }, // Outer Thin
    { cpOffset: 177, width: 4, opacity: 0.9 }, // Inner Thick
    // Concave Down Group
    { cpOffset: -150, width: 1.5, opacity: 0.9 }, // Inner Thick
    { cpOffset: -169, width: 4, opacity: 0.9 }, // Outer Thin
];


export const getMissionCurveData = (index: number, total: number) => {
    const angle = (index * 360) / total;
    const rad = (angle * Math.PI) / 180;


    const rStart = GEOMETRY.centerOffset;
    const rEnd = GEOMETRY.svgRadius - GEOMETRY.itemOffset;

    const sx = GEOMETRY.cx + rStart * Math.cos(rad);
    const sy = GEOMETRY.cy + rStart * Math.sin(rad);

    const ex = GEOMETRY.cx + rEnd * Math.cos(rad);
    const ey = GEOMETRY.cy + rEnd * Math.sin(rad);

    const mx = (sx + ex) / 2;
    const my = (sy + ey) / 2;


    const perpAngle = rad + Math.PI / 2;
    const px = Math.cos(perpAngle);
    const py = Math.sin(perpAngle);

  
    const rVecX = mx - GEOMETRY.biasX;
    const rVecY = my - GEOMETRY.biasY;
    const rLen = Math.sqrt(rVecX * rVecX + rVecY * rVecY);
    const rx = rVecX / (rLen || 1);
    const ry = rVecY / (rLen || 1);


    return CURVE_STYLES.map((style) => {
        const cpx = mx + style.cpOffset * px + GEOMETRY.radialElongation * rx;
        const cpy = my + style.cpOffset * py + GEOMETRY.radialElongation * ry;

        return {
            d: `M ${sx} ${sy} Q ${cpx} ${cpy} ${ex} ${ey}`,
            width: style.width,
            opacity: style.opacity,
        };
    });
};