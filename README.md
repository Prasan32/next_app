#start app 
 - npm run dev

##UI library
-TailwindCSS
-DaisyU

#Server Components are with extensions .js and clint are .jsx 


##configuraton
 -next.config.js file

 #incase of basepath
 --basePath: '/pathname',
 #for custom build
 -- distDir: 'build', 
#incase of production build failed due to eslint
-- eslint: { ignoreDuringBuilds: true}

#incase of use of the could image for optimization
--images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  }
 #loader file
  --export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

##More info about cloud and configuration on https://nextjs.org/docs/pages/api-reference/next-config-js/images

##For production build with output file 
---module.exports = {
  output: 'standalone',
}

--This will create a folder at .next/standalone which can then be deployed on its own without installing node_modules.

##for image optimization where next/image is used 
install sharp  -- npm i sharp


##incase of using different page extensions configure in next.config.js
--pageExtensions: [ 'jsx', 'js', 'tsx', 'ts'],
