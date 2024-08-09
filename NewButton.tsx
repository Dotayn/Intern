const NewButton = ({ arr }: { arr: any }) => {
  return (
    <div>
      <p className="flex flex-col justify-center">
        <ul>
          {arr.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default NewButton;
