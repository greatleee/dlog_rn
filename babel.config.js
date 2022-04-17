module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@atoms': './src/atoms',
          '@components': './src/components',
          '@constants': './src/constants',
          '@images': './src/assets/images',
          '@models': './src/models',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
