import Mock from 'mockjs'
export var bfwMocks=[]
function addMock(list){
    list.forEach(n=>{
        if(n.method){
            bfwMocks.push(n)
        }
        if(n.path){
            Mock.mock(n.path,n.data)
        }
    })
}
const mockContext = require.context('./active',true,/mock/);
mockContext.keys().forEach(filepath=>{
    let mockModule = mockContext(filepath)
    let props = Object.getOwnPropertyNames(mockModule)
    props.forEach(name=>{
        // console.log(name,'name')
        if(name!=='__esModule'){
            // console.log(mockModule[name],'data')
            addMock(mockModule[name])
        }
    })
})
console.log(bfwMocks,'bfwMocks')
if(bfwMocks.length!==0){
    bfwMocks.forEach(n=>{
        console.log('/'+n.method)
        Mock.mock('/'+n.method,'post',n.data)
    })
}