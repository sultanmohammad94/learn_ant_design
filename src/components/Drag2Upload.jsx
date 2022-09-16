import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const {Dragger} = Upload;
const props = {
  headers: {
    authorization: 'authorization-text',
  },
  
  name: 'file',
  multiple: false,
  action: "http://localhost:3000//",
  showUploadList : {showRemoveIcon: true},
  
  onChange(info) {
    const { status } = info.file;
    
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
    
  },
};

const Drag2Upload = () => {
 

  return (
    <Dragger {...props} 
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Dragger>
  )
}
export default Drag2Upload;