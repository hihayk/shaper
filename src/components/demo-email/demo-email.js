import React from 'react'
import './demo-email.css'

const contents = [
  `Nylon is a chord generator that emulates chord strokes of a guitar. Play up to 6 strings per chord, add dynamics by controlling stroke speed, acceleration and velocity, and humanize each stroke by adding randomness.`,
  `Alternative graphical interface for Robert Henke's ml.Distance but with a twist. Distance and panning values are interpolated, for avoiding clicks in the sound. The added smooth parameter controls the interpolation time.`,
  `As suggested this version should keep correct timings when changing looping lengths.`,
  `The Interpolation Time`,
  `Added a preset system; now you can store/recall settings within a live set`,
]

const emails = [
  { name: 'Koji Akane', handle: '@koji', content: contents[0] },
  { name: 'Kiyoko Riku', handle: '@kiyoko', content: contents[1] },
  { name: 'Ichirō Nori', handle: '@nori', content: contents[2] },
]
const menuItems = [
  'First Section', 'Second Section', 'Third Section', 'Fourth Section'
]

const DemoEmail = () => (
  <div className="emailWrapper">
    <aside className="sidebar">
      <div className="logo mb-xl"></div>
      <button className="button button-accent text-l mb-xl">New</button>
      {menuItems.map((menuItem, index) => (
        <div className={index === 1 ? 'menuItem active' : 'menuItem'} key={index}>
          {menuItem}
        </div>
      ))}
    </aside>
    <main>
      <div className="mb-l text-xl">
        <strong>{contents[3]}</strong>
      </div>
      <div className="tabs mb-l">
        <strong className="tab active">First</strong>
        <div className="tab">Second</div>
        <div className="tab">Third</div>
      </div>
      <div className="searchSection">
        <input type="text" className="textInput" placeholder="Search" />
      </div>
      <div className="post mb-xl">
        <div className="postLeft">
          <div className="postAvatar"></div>
        </div>
        <div className="postMain">
          <div className="postAuthor">{emails[2].name}</div>
          <div className="postContent mb-m text-l">{emails[2].content}</div>
          <div className="postDate text-s c-bodyDimmed">6:51 p. m. · 11 jun. 2020</div>
        </div>
      </div>
      <div className="emails">
        {emails.map((email, index) => (
          <div className="email" key={index}>
            <div className="listCell">{email.name}</div>
            <div className="listCell c-bodyDimmed">{email.content}</div>
          </div>
        ))}
      </div>
      <div className="mt-xl"></div>
      
      <div className="formGrid">
        <div>
          <label>Email</label>
          <input onChange={() => {}} type="text" className="textInput mt-s" value="email@example.com" />
        </div>
        <div>
          <label>Password</label>
          <input onChange={() => {}} type="password" className="textInput mt-s" value="123456" />
        </div>
        <button className="button">Log in</button>
      </div>

      <div className="mb-xl"></div>
    </main>
    <aside className="detailsPanel">
      <div className="userCard">
        <div className="userCardAvatar"></div>
        <div className="userCardInfo">
          <div className="userCardName">{emails[1].name}</div>
          <div className="userCardHandle c-bodyDimmed">{emails[1].handle}</div>
        </div>
        
        <button className="button buttonSmall">Follow</button>
      </div>

      <div className="mb-m"></div>
      
      <div className="highlightCard">
        <div className="highlightCardInfo">
          <strong>This device includes 4 delays </strong>
          Greater control to generate loops
        </div>
        <div className="highlightCardAvatars">
          <div className="highlightCardAvatar" />
          <div className="highlightCardAvatar" />
          <div className="highlightCardAvatar" />
        </div>
      </div>

      <div className="mb-m"></div>

      <div className="chartCard">
        <div className="chart">
          <div className="data pb-s">
            <div className="dataTitle">Data</div>
            <div className="dataNumber text-xl">
              <span className="c-bodyDimmed">$</span>
              <strong>731</strong>
            </div>
          </div>
          <svg viewBox="0 0 172 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 31L14.2951 28.4192C15.6894 28.1485 17.1344 28.3813 18.3732 29.0759L25.6071 33.1326C28.8826 34.9695 33.0214 33.3799 34.2252 29.8227L41.5807 8.08787C43.4304 2.62227 51.175 2.66282 52.9673 8.14749L59.5625 28.3291C61.0033 32.7381 66.6882 33.9146 69.7607 30.4397L75.4172 24.0421C77.1235 22.1123 79.8713 21.487 82.2446 22.4884L88.2045 25.0031C91.2555 26.2904 94.7754 24.8726 96.1588 21.8639C99.6048 14.3691 105.859 1.75955 109.182 1.16666C113.743 0.352774 123.828 13.9035 124.591 14.9377C124.624 14.9837 124.653 15.0235 124.685 15.0706L135.49 30.8019C137.776 34.1299 142.63 34.2958 145.138 31.1316L154.496 19.3246C155.182 18.4584 156.095 17.7986 157.132 17.4181L171 12.3333" stroke="var(--c-accent)" strokeWidth="2"/>
          </svg>
        </div>
        <div className="chart">
          <div className="data pb-s">
            <div className="dataTitle">Data</div>
            <div className="dataNumber text-xl">
              <span className="c-bodyDimmed">$</span>
              <strong>294</strong>
            </div>
          </div>
          <svg viewBox="0 0 172 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 22L13.3569 13.2048C15.2481 11.8587 17.7461 11.7243 19.7709 12.8598L27.2149 17.0342C29.8858 18.5321 33.2561 17.7782 35.0344 15.2852L43.27 3.73918C45.4164 0.729889 49.7472 0.35847 52.3748 2.95832L62.1256 12.6064C62.5843 13.0603 62.9668 13.5852 63.2583 14.1609L73.3924 34.1745C75.5192 38.3746 81.4338 38.601 83.8754 34.5757L91.1421 22.5954C92.6407 20.1247 95.6875 19.0732 98.3909 20.0936L107.636 23.5831C108.648 23.965 109.741 24.0642 110.809 23.8936C114.344 23.3293 119.467 22.6566 122.382 22.2841C123.836 22.0983 125.172 21.3935 126.142 20.295L135.226 10.0084C137.739 7.16297 142.23 7.3369 144.515 10.3681L154.071 23.0447C155.016 24.298 156.415 25.1312 157.967 25.3656L171 27.3333" stroke="var(--c-accent)" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      
      <div className="mb-m"></div>

      <div className="detailsCard">
        <div className="text-s mb-m">{emails[2].name}</div>
        <div className="text-m mb-m">{contents[4]}</div>
        <div className="text-s mb-l c-bodyDimmed">{emails[2].content}</div>
        <div className="detailsActions">
          <button className="button button-accent">Save</button>
          <button className="button ml-s">Cancel</button>
        </div>
      </div>


    </aside>
  </div>
)

export default DemoEmail