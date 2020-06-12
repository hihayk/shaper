import React from 'react'
import './demo-email.css'

const emails = [
  { name: 'Brian', content: 'This device includes 4 delays that can be patched together in the way that the user wishes, this allows greater control to generate loops and feedback.' },
  { name: 'Brian', content: 'This device includes 4 delays that can be patched together in the way that the user wishes, this allows greater control to generate loops and feedback.' },
  { name: 'Brian Dog', content: 'This device includes 4 delays that can be patched together in the way that the user wishes, this allows greater control to generate loops and feedback.' },
  { name: 'Brian', content: 'This device includes 4 delays that can be patched together in the way that the user wishes, this allows greater control to generate loops and feedback.' },
  { name: 'Brian', content: 'This device includes 4 delays that can be patched together in the way that the user wishes, this allows greater control to generate loops and feedback.' },
  { name: 'Brian', content: 'This device includes 4 delays that can be patched together in the way that the user wishes, this allows greater control to generate loops and feedback.' },
  { name: 'Brian', content: 'This device includes 4 delays that can be patched together in the way that the user wishes, this allows greater control to generate loops and feedback.' },
]
const menuItems = [
  'Menu item', 'Another', 'Third', 'More'
]

const DemoEmail = () => (
  <div className="emailWrapper">
    <aside className="sidebar">
      <div className="logo mb-xl"></div>
      <button className="button button-accent mb-xl">New</button>
      {menuItems.map((menuItem, index) => (
        <div className={index === 1 ? 'menuItem active' : 'menuItem'} key={index}>
          {menuItem}
        </div>
      ))}
    </aside>
    <main>
      <div className="searchSection">
        <input type="text" className="textInput" placeholder="Search" />
      </div>
      <div className="post mb-m">
        <div className="postLeft">
          <div className="postAvatar"></div>
        </div>
        <div className="postMain">
          <div className="postAuthor">{emails[3].name}</div>
          <div className="postContent mb-m text-m">First Steps in React</div>
          <div className="postDate text-s c-bodyDimmed">6:51 p. m. · 11 jun. 2020</div>
        </div>
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
            <div className="listCell">{email.content}</div>
          </div>
        ))}
      </div>
    </main>
    <aside className="detailsPanel">
      <div className="detailsCard">
        <div className="text-s mb-m">{emails[2].name}</div>
        <div className="text-m mb-m">{emails[2].content}</div>
        <div className="text-s mb-l">{emails[2].content}</div>
        <div className="detailsActions">
          <button className="button mr-s">Cancel</button>
          <button className="button button-accent">Save</button>
        </div>
        </div>
    </aside>
  </div>
)

export default DemoEmail