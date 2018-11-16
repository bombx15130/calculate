<template>
    <div class="tableWrap">
        <table class="exampleTable">
            <tr>
                <th>編號</th>
                <th>姓名</th>
                <th>電話</th>
                <th>信箱</th>
                <th>修改</th>
            </tr>
            <t-content
                v-for="c in contents"
                :key="c.id"
                :id="c.id"
                :name="c.name"
                :phone="c.phone"
                :email="c.email"
            ></t-content>
        </table>
    </div>
</template>

<script>

export default {
    data(){
        return{
            contents:[
                {id:1,name:'Jason',phone:'0912314560',email:'aaa@gmail.com'},
                {id:2,name:'Stan',phone:'0912314561',email:'bbb@gmail.com'},
                {id:3,name:'Jack',phone:'0912314562',email:'ccc@gmail.com'},
                {id:4,name:'Sandy',phone:'0912314563',email:'ddd@gmail.com'},
                {id:5,name:'Cindy',phone:'0912314564',email:'eee@gmail.com'},
            ]
        }
    },
    components:{
        't-content':{
            props:['id','name','phone','email'],
            data(){
                return{
                }
            },
            template:'<tr><td>{{id}}</td><td>{{name}}</td><td>{{phone}}</td><td>{{email}}</td><td><button>Select</button></td></tr>',
        }
    }
}
</script>

<style lang="scss" scoped>
$fontSize:16px;
$font:'ariel';
$thColor:#2C3845;
$chFont:'微軟正黑體';
.tableWrap{
    color:$aaa;
    width:80%;
    background-color: #5BB9B8;
    margin:100px auto;
    padding:50px;
    .exampleTable{
        width:60%;
        font-family:$font;
        font-size: $fontSize;
        margin:auto;
        
        tr:nth-child(odd){
            background-color: rgba(44,56,69,.6);
        }
        tr:nth-child(even){
            background-color: rgba(44,56,69,.8);
        }
        th,td{
            padding:10px;
        }
        th{
            font-family: $chFont;
            background-color: $thColor;
        }
        button{
            border-radius: 4px;
            
        }
    }
}

</style>


