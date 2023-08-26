import React from 'react'
import styles from '../styles/blogs.module.css'
import Slider from 'react-slick'
import Reactplayer from "../components/ReactPlayer"

const Blogs = () => {
  return (
      <>
          <section style={{ minHeight: `600px`, backgroundColor: `#F2F6FF`, padding: `2%` }}>
              <div className={styles.main_container}>
                  <div className={styles.div1}>
                      <div
                          style={{
                              display: `flex`,
                              flexDirection: `column`,
                              alignItems: `flex-start`,
                              marginTop: `1%`,
                              justifyContent: `space-evenly`,
                              height: `150px`,
                          }}
                      >
                          <h2
                              style={{
                                  fontWeight: `700`,
                                  fontFamily: `cursive`,
                                  fontSize: `20px`,
                              }}
                          >
                              What is BlockChain?
                          </h2>
                          <p style={{ textAlign: `justify` }}>
                              Blockchain is a decentralized digital ledger technology that allows
                              multiple parties to maintain a shared and immutable record of
                              transactions or information without the need for a central authority.
                              It enables secure and transparent peer-to-peer transactions, data
                              storage, and communication across a network of computers, known as
                              nodes.
                          </p>
                      </div>
                      <div
                          style={{
                              display: `flex`,
                              flexDirection: `column`,
                              alignItems: `flex-start`,
                              marginTop: `1%`,
                              justifyContent: `space-evenly`,
                              height: `150px`,
                          }}
                      >
                          <h2
                              style={{
                                  fontWeight: `700`,
                                  fontFamily: `cursive`,
                                  fontSize: `20px`,
                              }}
                          >
                              What is Ethereum Technology?
                          </h2>
                          <p style={{ textAlign: `justify` }}>
                              Ethereum is an open-source blockchain platform and cryptocurrency
                              that was proposed by Vitalik Buterin in late 2013 and launched in
                              2015. While Bitcoin is primarily designed for peer-to-peer digital
                              currency transactions, Ethereum goes beyond that and provides a
                              decentralized platform for executing smart contracts and building
                              decentralized applications (dApps).
                          </p>
                      </div>
                      <div
                          style={{
                              display: `flex`,
                              flexDirection: `column`,
                              alignItems: `flex-start`,
                              marginTop: `1%`,
                              justifyContent: `space-evenly`,
                              height: `150px`,
                          }}
                      >
                          <h2
                              style={{
                                  fontWeight: `700`,
                                  fontFamily: `cursive`,
                                  fontSize: `20px`,
                              }}
                          >
                              What is NFT?
                          </h2>
                          <p style={{ textAlign: `justify` }}>
                              NFT stands for Non-Fungible Token. It is a type of digital asset that
                              represents ownership or proof of authenticity of a unique item or
                              piece of content. Unlike cryptocurrencies such as Bitcoin or
                              Ethereum, which are fungible and can be exchanged on a one-to-one
                              basis, NFTs are unique and cannot be exchanged on an equal basis.
                              Each NFT has distinct characteristics, metadata, and ownership
                              information that set it apart from other tokens.
                          </p>
                      </div>
                  </div>
                  <div className={styles.div2}>
                      <Reactplayer link="https://www.youtube.com/watch?v=yubzJw0uiE4&pp=ygUSd2hhdCBpcyBibG9ja2NoYWlu" />
                      <br />
                      <Reactplayer link="https://www.youtube.com/watch?v=NNQLJcJEzv0&pp=ygULd2hhdCBpcyBuZnQ%3D" />
                  </div>
              </div>
          </section>
      </>
  )
}

export default Blogs
