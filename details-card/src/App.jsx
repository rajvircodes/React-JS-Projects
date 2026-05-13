
const App = () => {
  return (
    <div>
      <div className="card">
        <div className="top-card">
          <p>About the community</p>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
        <card className="details">
          <h3>Blender Renders</h3>
          <p>A place where beginner Blender <br /> artist can post their creation and <br /> get feedback on.</p>
        </card>
        <div className="data">
          <div className="member">
            <h2>13.5K</h2>
            <p>Members</p>
          </div>
          <div className="online">
            <h2>47</h2>
            <p>Online</p>
          </div>
        </div>
        <div className="buttons">
          <button>Joined</button>
          <button id="post-btn">Create Post</button>
        </div>
        <div className="timestamps">
          <p>Created Feb 7,2021</p>
          
        </div>
      </div>
    </div>
  )
}

export default App