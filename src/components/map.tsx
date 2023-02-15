import { StaticMap } from "react-map-gl";
// @ts-ignore
import DeckGL from "@deck.gl/react";

const INITIAL_VIEW_STATE = {
  longitude: -137.257073,
  latitude: -70.503485,
  zoom: 3,
  pitch: 0,
  bearing: 0,
};

export default function MapComponent({ height, width, viewState }: any) {
  return (
    <div style={{ height, width }}>
      <DeckGL
        initialViewState={viewState || INITIAL_VIEW_STATE}
        controller={true}
      >
        <StaticMap
          mapStyle={
            "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
          }
        />
      </DeckGL>
    </div>
  );
}
