module.exports = {
  // Special Conversions
  'RGB': [
    'SRGB'
  ],
  'Player': [
    'IPlayer',
  ],
  'LocalPlayer': [
    /class LocalPlayerScripting( * __ptr64)?/,
  ],
  'World': [
    /class WorldScripting( * __ptr64)?/,
  ],
  'Camera': [
    /class CameraScripting( * __ptr64)?/,
  ],
  'Texture': [
    'class ScriptingTexture',
  ],
  'Vector2': [
    /class math::basic_vector2<int>/,
    /SVector2/,
  ],
  'Vector2f': [
    /class math::basic_vector2<float>/,
    /SVector2f/,
  ],
  'Vector3': [
    /class math::basic_vector3<int>/,
    /SVector3.*/,
  ],
  'Vector3f': [
    /class math::basic_vector3<float>/,
    /SVector3f/,
  ],
  'Vector4': [
    /SVector4/,
  ],
  'Vector4f': [
    'struct glm::tvec4<float,0>',
    /SVector4f/,
  ],
  'Matrix': [
    /(class|struct) (math|glm)::t?mat(rix|4x4)?<.*>/,
    'class SMatrix',
  ],
  'JCMPNamespace': [
    /public: (.*?)::JCMPScriptNamespace \* __ptr64/,
  ],
  'JCMPUINamespace': [
    /public: (.*?)::JCMPUINamespace \* __ptr64/,
  ],
  'Array': [
    /class std::vector<(.*?)>/,
  ],
  'any': [
    'class scr::ScriptArg',
    'class scr::ScriptValue',
  ],
  'unknown': [
    '?',
  ],
  'Entity': [
    'ISyncableEntity',
    /class ISyncableEntity( * __ptr64)?/,
  ],
  'PlayerNameTag': [
    /class Nametag( * __ptr64)?/,
  ],
  'Settings': [
    /class SettingsScripting( * __ptr64)?/,
  ],
  'Renderer': [
    'scriptingRenderer',
  ],
};
