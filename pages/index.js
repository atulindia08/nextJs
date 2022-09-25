

export default function Home({name}) {
  
  return (
    <div >
     <h3>Welcome to next</h3>
    </div>
  )
}

export const getStaticProps = ()=>{
  return {
    props:{
      "name":"kushwaha"
    }
  }
}
