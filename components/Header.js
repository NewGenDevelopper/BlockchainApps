import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { RobinhoodContext } from '../context/RobinhoodContext'


const styles = {
  container: 'flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed',
  leftHeader: 'flex flex-1',
  logo: 'object-cover cursor-pointer',
  searchWrapper: 'flex flex-1',
  searchInputContainer: '',
  searchIcon: 'text-gray-400 text-3xl mr-3',
  searchInputWrapper: 'text-gray-400 text-lg w-full',
  searchInput: 'bg-transparent outline-none w-full',
  rightHeader: 'flex items-center justify-end text-white gap-8',
  menuItem: 'cursor-pointer font-bold hover:text-green-500 duration-300',

}

const Header = () => {

    const {
      connectWallet,
      signOut,
      currentAccount,
      isAuthenticated,
      formattedAccount,
      swapTokens,
      
    } = useContext(RobinhoodContext)

    return (
      <div className={styles.container}>
      <div className={styles.leftHeader}>
      <Image src={logo} height={30} width={140} className={styles.logo} />
       </div>
       <div className={styles.searchWrapper}>
        <div className={styles.searchInputContainer}>
        <AiOutlineSearch className={styles.searchIcon} />
        <div className={styles.searchInputWrapper}>
        <input placeholder='' className={styles.searchInput}/>

        </div>
        </div>
       </div>
       <div className={styles.rightHeader}>
       <div className={styles.menuItem} onClick={swapTokens}>
            Upcoming Services|  
        </div>
      <div className={styles.menuItem}>Buy Crypto with Fiat </div>
       <div className={styles.menuItem}>Pool </div>
       <div className={styles.menuItem}>NFT </div>
       <div className={styles.menuItem}>P2P Lending | </div>
       

       {isAuthenticated && (
        <>
               <div className={styles.menuItem}>{formattedAccount}</div>
            <div className={styles.menuItem} onClick={() => signOut()}>
              Disconnect Wallet
            </div>
            
        </>
       )}

      {!isAuthenticated && (
          <div className={styles.menuItem} onClick={() => connectWallet()}>
           CONNECT WALLET HERE
          </div>
        )}

      
       </div>
       </div>  
    )
}

export default Header