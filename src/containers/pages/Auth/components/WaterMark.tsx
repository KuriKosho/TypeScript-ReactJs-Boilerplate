import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

interface WatermarkProps {
  content: string | React.ReactNode;
}
interface WatermarkStyleProps {
  content: string | "Powered by KuriKosho";
  className: string;
}
const WaterMarkItems = (props: WatermarkStyleProps) => {
  return (
    <div className={`position-fixed w-100 h-100 d-flex fs-12px fs-sm-20px fs-md-30px fs-lg-50px ${props.className}`}
      style={{
        pointerEvents: 'none', // Đảm bảo watermark không ảnh hưởng đến các thao tác khác
        opacity: 0.2, // Điều chỉnh độ mờ
        zIndex: 9999, // Đảm bảo watermark hiển thị trên cùng
        color: '#aeaeae',
        transform: 'rotate(-30deg)',
        whiteSpace: 'nowrap',
      }}
    >
      {props.content}
    </div>
  )
}
const Watermark = ( content: WatermarkProps ) => {
  return (
    <>
    <div className="d-flex w-100 h-100">
      <WaterMarkItems content="Powered by KuriKosho" className='justify-content-center' />
      <WaterMarkItems content="Powered by KuriKosho" className='align-items-center' />
      <WaterMarkItems content="Powered by KuriKosho" className='align-items-center justify-content-end' />
      <WaterMarkItems content="Powered by KuriKosho" className='align-items-end justify-content-center  ' />
    </div>
    </>
   
  );
};

export default Watermark;



// interface WaterMarkBackgroundProps {
//   children: any;
// }

// const WaterMarkBackground = (props: WaterMarkBackgroundProps) => {
//   return (
//     <div>
//       <Watermark font={{fontSize: 30, color: '#aeaeae30'}} content="Powered by KuriKosho" className='start-0 end-0 top-0 bottom-0 position-absolute' style={{background: "#F1F1F1"}}>
//           <div className={`d-flex flex-row justify-content-center z-2 align-items-center ${classes.align_center_item}`}>
//               {props.children}
//           </div>
//       </Watermark>
//     </div>
   
//   )
// }

// export default WaterMarkBackground
