import React from "react";

function Routes(props) {
    const { projection, routes, selectedAirlineID } = props;

    if (selectedAirlineID === null) {
        return <g></g>;
    }

    const filteredRoutes = routes.filter(route => route.selectedAirlineID === selectedAirlineID);
    //console.log("Routes data:", routes);
    //console.log("Selected Airline ID:", selectedAirlineID);
    return (
        <g>
            {routes.map((route, index) => {
                const startCoordinates = [route.SourceLongitude, route.SourceLatitude]; 
                const endCoordinates = [route.DestLongitude, route.DestLatitude]; 

                const [startX, startY] = projection(startCoordinates);
                const [endX, endY] = projection(endCoordinates);

                return (
                    <line
                        key={index}
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="#992a5b" 
                        strokeWidth={0.1} 
                    />
                );
            })}
        </g>
    );
}

export { Routes };