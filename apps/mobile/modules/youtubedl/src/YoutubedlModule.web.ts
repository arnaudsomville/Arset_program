import { registerWebModule, NativeModule } from 'expo';

// YoutubedlModule is not available on the web platform.
class YoutubedlModule extends NativeModule<{}> {}

export default registerWebModule(YoutubedlModule, 'YoutubedlModule');
