import React from 'react'
import '../demo.css';

const DemoContent = () => {
  return (
    <div className="wrapper">
      <div className="column">
        <div className="limitLineLength mb-m text-xl">
          <strong>The Super Highway</strong>
          In The Towm
        </div>
        <div className="limitLineLength mb-m text-l">
          In the episode, the owners of the Three Feathers Indian Casino have acquired the town of South Park. The citizens are being forced off their land to make way for a new super highway.
        </div>
        <div className="limitLineLength mb-m text-m">
          In the episode, the owners of the Three Feathers Indian Casino have acquired the town of South Park. The citizens are being forced off their land to make way for a new super highway.
        </div>
        <div className="limitLineLength mb-l">
          In the episode, the owners of the Three Feathers Indian Casino have acquired the town of South Park. The citizens are being forced off their land to make way for a new super highway. Faced with saying goodbye to their friends and their way of life, the boys rally the townspeople to fight back against the rich and powerful Indians.
        </div>
        <div className="limitLineLength mb-l text-xs">
          In the episode, the owners of the Three Feathers Indian Casino have acquired the town of South Park. The citizens are being forced off their land to make way for a new super highway. Faced with saying goodbye to their friends and their way of life, the boys rally the townspeople to fight back against the rich and powerful Indians.
        </div>

        
        <a href="https://www.youtube.com" className="link">Take me somewhere</a>
      </div>
      <div className="column">
        <div className="card">
          <div className="mb-m text-m">
            The Super Highway
          </div>
          <div className="mb-l text-s">
            In the episode, the owners of the Three Feathers Indian Casino have acquired the town of South Park. The citizens are being forced off their land to make way for a new super highway.
          </div>
          <div className="mb-l">
            <div className="distribute">
              <input type="text" className="textInput" />
              <button className="button">Send</button>
            </div>
          </div>
          <div className="distribute">
            <button className="button">Cancel</button>
            <button className="button button-accent">Save</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default DemoContent