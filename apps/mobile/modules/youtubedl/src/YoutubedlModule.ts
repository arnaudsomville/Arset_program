import { requireNativeModule } from "expo-modules-core";

import type { YoutubedlModule } from "./Youtubedl.types";

export default requireNativeModule<YoutubedlModule>("Youtubedl");
