import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { baseUrl, getRequest, postRequest } from '../../services/services';

const ProfileDetails = () => {

  const [user,setUser] = useState(null);
  const tmpUser = useSelector(state => state.user)
  const userID = useParams().id;

  useEffect(() => {
    if(location.pathname.startsWith('/user/')){
      setUser(tmpUser);
    }
    if(location.pathname.startsWith('/root/')){

      ( async() => {
        const response = await getRequest(`${baseUrl}/user/get/${userID}`);
        if(response.user){
          setUser(response.user);
        }
    } )();

    }
  },[])
  
  return (
    <div>
      <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest m-12">Profile Details</h1>
                <div className="bg-green-700 bg-opacity-40 px-12 py-12 flex flex-col mx-32 shadow-black rounded-xl shadow-2xl ">
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Cinsiyet: <span>{user?.features?.gender}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Yaş: <span>{user?.features?.age}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Kilo(kg): <span>{user?.features?.weight}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Boy(cm): <span>{user?.features?.height}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Tanı Konulan Hastalıklar: <span>{user?.features?.diseases}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Birinci Derece Akrabalarda Bulunan Kronik Rahatsızlıklar: <span>{user?.features?.chronicRelative}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Düzenli Kullanılan İlaçlar: <span>{user?.features?.usedMedications}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Geçirilen İşlemler / Ameliyatlar:  <span>{user?.features?.operations}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Besin Alerjileri: <span>{user?.features?.allergies}</span></p>


                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Fiziksel Aktiviteler: <span>{user?.features?.physicalActivity}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Uyku Düzeni: <span>{user?.features?.sleepPattern}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Sindirim Sistemi Problemleri: <span>{user?.features?.digestiveSystem}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Mideye Rahatsızlık Veren Yiyecek ya da İçecekler: <span>{user?.features?.stomachDamaging}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Öğün Düzeni: <span>{user?.features?.mealPlanning}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Genellikle Atlanan Öğün: <span>{user?.features?.skippedMeal}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Atıştırma Alışkanlıkları: <span>{user?.features?.snacks}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Vazgeçilmez Besin ya da Besinler:  <span>{user?.features?.essentialFood}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Tüketilmeyen Besin ya da Besinler: <span>{user?.features?.notConsumedFood}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Gece Yemek Yeme Alışkanlığı: <span>{user?.features?.nightEatingHabits}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Psiklojik Durumun Beslenme Üzerindeki Etkisi: <span>{user?.features?.psychologicalState}</span></p>



                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Su Tüketim Miktarı: <span>{user?.features?.waterAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Çay ve Kahve Tüketim Miktarı: <span>{user?.features?.teaCoffeAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Maden Suyu Tüketim Miktarı: <span>{user?.features?.mineralWaterAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Asitli İçecek Tüketim Miktarı: <span>{user?.features?.sodaAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Şeker Tüketim Miktarı: <span>{user?.features?.sugarAmount}</span></p>
                    <p className="text-start tracking-widest text-lg text-white  font-heading  mb-6">Günlük Alkol Tüketim Miktarı: <span>{user?.features?.alcoholAmount}</span></p>

                    
                </div>

    </div>
  )
}

export default ProfileDetails
