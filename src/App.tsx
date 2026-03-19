import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { siloeVideoscrollData } from "./VideoPlayer/siloeVideoscrollData";
import Index from "./Index";
import VideoScroll from "./VideoPlayer/VideoScroll";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import type { Scene, SceneId, ScrollScene } from "./types";
import { Box } from "@mui/material";

const NotFoundPage = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

const getNextSrc = (scene: ScrollScene): string | undefined => {
  const lastHotspot =
    scene.navigationHotspots[scene.navigationHotspots.length - 1];
  if (!lastHotspot || lastHotspot.links.length !== 1) return undefined;

  const nextId = lastHotspot.links[0].href.replace(/^\/+/, "") as SceneId;
  return siloeVideoscrollData[nextId]?.src;
};

const App = () => {
  const sceneEntries = Object.entries(siloeVideoscrollData) as [
    SceneId,
    Scene,
  ][];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Index />} />
        <Route
          path="/museo"
          element={
            <VideoPlayer
              src="https://chocolate-lazy-marsupial-15.mypinata.cloud/ipfs/QmYnibhCMMHFWfe6TFtU8vpcX5sbyLP63cKVKd8rrWNZLd"
              title="Museo de Siloé"
              type="video"
              startTime={0}
            />
          }
        />
        {/* Las rutas con VideoScroll o VideoPlayer se crean a partir de siloeVideoscrollData. EJ : /ruta-de-la-memoria/A01 */}
        {sceneEntries.map(([sceneId, scene]) => {
          const type = scene.type;
          if (!type) return null;
          if (type === "scroll")
            return (
              <Route
                key={sceneId}
                path={"/ruta-de-la-memoria/" + sceneId}
                element={<VideoScroll {...scene} nextSrc={getNextSrc(scene)} />}
              />
            );
          if (type === "video")
            return (
              <Route
                key={sceneId}
                path={"/ruta-de-la-memoria/" + sceneId}
                element={<VideoPlayer {...scene} />}
              />
            );
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
