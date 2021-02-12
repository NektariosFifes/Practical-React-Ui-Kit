const ln_input = require("readline");
const webpack = require('webpack');
const filesystem = require("fs")
const path = require("path");
const fs = require("fs-extra")

const cmdRead = ln_input.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);


  //Please if you want to change something dont copy paste everything on your own project.Feel free
  // to make a pull request and contribute! Contact me : nektariosfifes12@gmail.com

      cmdRead.question("Welcome to practical ui kit manager | OPTIONS: \n0:exit manager\n1:build project \n2:edit build configuration\n" ,
          (num) => {
              switch (num) {
                  case '0':
                      process.exit(0)
                      break
                  case '1':
                        resolveFilesAndDirectories().then((result)=> {
                          webpack(
                              result
                           , (err , stats) => {
                              if (err) {
                                  console.error(err);
                                  return;
                              }

                              console.log(stats.toString({
                                  chunks : true ,  // Makes the build much quieter
                                  colors : true    // Shows colors in the console
                              }));
                          })
                      }
                  )




                      break
                  case '2':

                      break

                  default:
                      process.exit(0)
              }
          })

cmdRead.on("close", ()=>{
    HandleEvent('cls');
});



function HandleEvent() {
    cmdRead.close()
    console.log("Manager gracefully shutting down")
}



async function resolveFilesAndDirectories() {

    const ParentDirectoriesArray  =  await  filesystem.readdir(
        path.join(__dirname,"../src")
    )

    const IndexDirectories = Promise.all(
        ParentDirectoriesArray.map(
            async folder_or_filename =>{
                const path = path.join(path.join(__dirname,"../src"),folder_or_filename);
                const index_directory  = path.join(path,'index.ts')

                const status = await fs.stat(path)

                if(!fs.isDirectory(path)) return null
                if(!fs.existsSync(index)) return null

                return {name:folder_or_filename , "directory-of-index":index_directory}
            }
        )
    )
    console.log(IndexDirectories)

    const IndexDirectories_Clean = IndexDirectories
        .filter(value=>value)
        .reduce((accumulator,value)=>{
            Object.assign(
                {},
                accumulator,
                {[value.name]:value["directory-of-index"]})
        },{})

    console.log(IndexDirectories_Clean)


    var  config =  {
        mode : 'none' ,


        entry : IndexDirectories_Clean ,

        output : {
            filename : '[name].js' ,
            path : path.resolve(__dirname , '../dist') ,
            libraryTarget : 'commonjs' ,
        } ,

        resolve : {
            extensions : [ '.ts' , '.tsx' , '.js' ] ,
            alias : {
                components : path.join(__dirname,"../src") ,
            } ,
        } ,

        externals : [
            {
                react : {
                    root : 'React' ,
                    commonjs2 : 'react' ,
                    commonjs : 'react' ,
                    amd : 'react' ,
                } ,
                'react-dom' : {
                    root : 'ReactDOM' ,
                    commonjs2 : 'react-dom' ,
                    commonjs : 'react-dom' ,
                    amd : 'react-dom' ,
                } ,
                // '/styled-jsx/': {
                //   root: '_JSXStyle',
                //   commonjs2: 'styled-jsx',
                //   commonjs: 'styled-jsx',
                //   amd: 'styled-jsx',
                // },
            } ,
            function (context , request , done) {
                if (/^styled-jsx/.test(request)) {
                    return done(null , 'commonjs ' + request)
                }
                done()
            } ,
        ] ,

        module : {
            rules : [
                {
                    test : /\.tsx?$/ ,
                    exclude : /(node_modules)/ ,
                    loader : 'babel-loader' ,
                    options : {
                        presets : [ '@babel/preset-env' , '@babel/preset-react' , '@babel/preset-typescript' ] ,
                        plugins : [ 'styled-jsx/babel' ] ,
                    } ,
                } ,
            ] ,
        } ,
    }

    return [
        config,
        {
            ...config,

            entry: {
                index: path.join(componentsPath, 'index.ts'),
            },
        },
        {
            ...configs,

            mode: 'production',

            entry: {
                'index.min': path.join(path.join(__dirname,"../src"), 'index.ts'),
            },

            output: {
                filename: '[name].js',
                path: path.resolve(__dirname, '../dist'),
                library: 'GeistUI',
                libraryTarget: 'umd',
                globalObject: 'this',
            },
        },
    ]
}
