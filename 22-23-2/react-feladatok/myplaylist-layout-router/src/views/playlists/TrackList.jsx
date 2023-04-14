import cn from "classnames";

export function TrackList({ items }) {
  console.log(items);
  return (
    <>
      <h3>Playlist title</h3>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <div className={cn("item", { active: false })}>
              <i className="large music middle aligned icon"></i>
            </div>
            <div>
              <div className="content">
                <div className="header">{item.title}</div>
                <div className="description">{item.artist}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
