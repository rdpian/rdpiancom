import React, { Component } from 'react'
import tania from '../../content/images/profile.jpg'
import twitter from '../../content/thumbnails/twitter.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tania} alt="Tania Rascia" />
            </div>
            <div>
              <p>
                Nama saya Pian. saya membantu orang-orang untuk memperoleh pengetahuan baru. saat ini saya sedang bertugas di SDN 1 Bojong Timur{' '}
                <strong>
                  Silakan disebar tulisan saya tanpa sepengetahuan saya juga gapapa, asal jangan di komersilkan aja ya.
                </strong>
              </p>

              <div className="flex">
                <a
                  className="social-media"
                  href="https://www.twitter.com/rdpian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} height="50" width="50" alt="Patreon" /> Follow Mie
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
