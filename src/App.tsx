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
import type { Scene, SceneId } from "./types";

const NotFoundPage = () => (
  <div>
    <h1>404 - Page Not Found</h1>
  </div>
);

const App = () => {
  const sceneEntries = Object.entries(siloeVideoscrollData) as [SceneId, Scene][];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Index />} />
        {/* Las rutas con VideoScroll o VideoPlayer se crean a partir de siloeVideoscrollData. EJ : /siloe/A01 */}
        {sceneEntries.map(([sceneId, scene]) => {
          const type = scene.type;
          if (!type) return null;
          if (type === "scroll")
            return (
              <Route
                key={sceneId}
                path={"/siloe/" + sceneId}
                element={<VideoScroll {...scene} />}
              />
            );
          if (type === "video")
            return (
              <Route
                key={sceneId}
                path={"/siloe/" + sceneId}
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
