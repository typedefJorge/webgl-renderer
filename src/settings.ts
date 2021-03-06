import { Vec3 } from "cuon-matrix-ts";

import { RenderMode } from "./graphics/renderModeMapper";
import { ShapeMode } from "./graphics/shapes2d/shapeMode";
import { DrawingMode } from "./graphics/drawingMode";
import { RGBColor } from "./graphics/rgbColor";
import { Camera } from "./graphics/camera";

const defaultRenderMode: RenderMode = "points";
const defaultShapeMode: ShapeMode = "points";
const defaultBackgroundColor: RGBColor = { red: 0.9, green: 0.9, blue: 0.9 };
const defaultColor: RGBColor = { red: 0.0, green: 0.0, blue: 0.0 };
const defaultIsFullscreen = false;
const defaultGpuMemoryEffeciency = false;

export let Settings =
{
    defaultRendereMode: defaultRenderMode,
    defaultShapeMode: defaultShapeMode,
    defaultPointSize: 10,
    defaultBackgroundColor: defaultBackgroundColor,
    defaultBackgroundAlpha: 1,
    defaultColor: defaultColor,
    defaultIsFullScreen: defaultIsFullscreen,
    defaultGpuMemoryEffeciency: defaultGpuMemoryEffeciency
};