<template>
    <el-col :span="24" class="wrapper">
      <h3>个人资料</h3>
        <!-- 头像上传 -->
        <div class="avatar-container">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        
        <div class="avatar-rule">请选择jpg格式，小于2M的图片（使用高质量图片，可生成高清头像）</div>
        </div>

        <!-- 表单模块 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="100px">
            <el-form-item label="昵称" prop="nickName" style="width:35%">
                <el-input v-model="ruleForm.nickName" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex" text-color="#fc8d59">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="生日" required>
                <el-col :span="11">
                <el-form-item prop="birthDate">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthDate" style="width: 50%;"></el-date-picker>
                </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="手机号" prop="phoneNum" style="width:35%">
                <el-input type="text" v-model="ruleForm.phoneNum" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label="现居住地" prop="address" style="width:35%">
                <el-input type="textarea" v-model="ruleForm.address" placeholder="请输入您所在的地址"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="warning" @click="submitForm('ruleForm')" style="background-color:#fc8d59">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')" type="warning" style="color:#fc8d59" plain>重置</el-button>
            </el-form-item>
        </el-form>

    </el-col>
</template>

<script>
export default {
    data() {
      return {
        //   图片地址
        imageUrl: '',
        // 表单的model和rules
        ruleForm: {
          nickName: '',
          sex:'',
          birthDate:'',
          phoneNum:'',
          address:''
        },
        rules: {
          nickName: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          birthDate: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          phoneNum: [
            { required: true, message: '请输入手机号码', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入您所在的地址', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        // 表单处理函数
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
              // eslint-disable-next-line
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    //   上传头像处理函数
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style>
  .wrapper{
    position: absolute;
    top: 0;
    left: 25%;
    display: flex;
    align-items: left;
    flex-direction: column;
  }
  .avatar-container{
    margin-left: 4%;
    margin-top: 1%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom:2%;
  }
  .avatar-rule{
    display: block;
    color:#606266;
    font-size:14px;
    width:250px;
    padding-left: 20px;
    
  }
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-left: 10%;
    /* display: inline-block; */
  }
  .avatar-uploader .el-upload:hover {
    border-color: #fc8d59;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px !important;
    text-align: center !important;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
 
 /* input框的颜色处理 */
.el-input__inner:hover,
.el-input__inner:focus,
.el-textarea__inner:focus{
    border-color: #fc8d59;
}
 
</style>