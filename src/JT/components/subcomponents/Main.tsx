type Text = {
  text: string;
  img: string;
};

const data: Text[] = [
  {
    text: "Item 1",
    img: "https://www.twosome.co.kr/resources/images/content/img_p_mobile_illust_.svg",
  },
  { text: "Item 2", img: "image2.jpg" },
  { text: "Item 3", img: "image3.jpg" },
];

const Main = () => {
  return (
    <section>
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Main;
