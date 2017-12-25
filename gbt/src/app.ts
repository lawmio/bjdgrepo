let program = require('commander');

// function collect(val:any, memo:any) {
//     memo.push(val);
//     return memo;
// }

program
    .version('0.0.1')
    .usage('upload')
    .option('-p,--permanant', 'to establish permanant key')
    .option('-d,--directory [path]', 'to upload a directory')
    .option('-s,--string [value]', 'to upload string')
    .option('-c,--cdir [value]', 'to upload string from keyboard')
    .parse(process.argv);

program
    .command('u')
    .description('上传文件')
    .action(function(name:string){
        
        console.log('Uploading "%s"',name)
    });

program.parse(process.argv)

program.permanant = '12356'
console.log('permanant - %s',program.permanant)
if(program.directory) console.log('directory - %s', program.directory)
if(program.string){
    console.log('string - %s', program.string)
} 
if(program.cdir) console.log('cdir - %s', program.cdir)