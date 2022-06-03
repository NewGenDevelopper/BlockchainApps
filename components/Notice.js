import React from 'react'

const styles = {
  notice: 'flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1',
  noticeContainer: 'flex-1',
  noticeTitle: 'text-gray-500',
  noticeMessage: 'text-white font-bold',
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
}

const Notice = () => {
  return (
    <div className={styles.notice}>
      <div className={styles.noticeContainer}>
        <div className={styles.noticeTitle}>.</div>
        <div className={styles.noticeMessage}>
          Connect your Wallet Above to Begin Trading. Please note that more coins will be added for trading as we work on bridging the gap between blockchains.
        </div>
      </div>
      <div className={styles.noticeCTA}>BCE Exchange is working on bringing you all the crypto-quality-services you deserve!</div>

    </div>
    )
}

export default Notice
