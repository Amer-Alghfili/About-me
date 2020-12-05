export default function List(props) {
  return mountStyles.map(({ item, props, key }) => {
    const { date, name, major, img, description } = item;
    return (
      <animated.div style={props} key={key}>
        <CertificationItem
          date={date}
          name={name}
          major={major}
          img={img}
          description={description}
        />
      </animated.div>
    );
  });
}
