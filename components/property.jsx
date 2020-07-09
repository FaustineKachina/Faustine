import Cetak from "./property2"

function property() {
  const datas = [
    {
      id: 1,
      nama: "Asep",
      gelar: "pengamen",
    },
    {
      id: 2,
      nama: "Jajang",
      gelar: "penyanyi",
    },
  ]

  //membuat variabel baru untuk mapping masing2 data
  const listData = datas.map((data) => <Cetak key={data.id} data={data} />)

  //menampilkan menggunakan return
  return <>{listData}</>
}

export default property
