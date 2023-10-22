import React, { useEffect } from 'react'
import { useState } from 'react'
import { formHandler } from '../../utils/formHandler';

const ProfileDetailsForm = () => {

    const [form, setForm] = useState({});

    useEffect(() => {
        console.log(form);
    }, [form]);


    return (
        <form className="w-full max-w-xl bg-gray-100 rounded-lg px-4 pt-2"
            onChange={(event) => formHandler({ event, form, setForm })}
        >
            <div className="flex flex-wrap -mx-3 mb-6">

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="gender" placeholder='Cinsiyet'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="age" placeholder='Yaş'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="weight" placeholder='Kilo(kg)'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="height" placeholder='Boy(cm)'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="diseases" placeholder='Tanısı Konulan Hastalıklar'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="chronicRelative" placeholder='Birinci Derece Akrabalarda Bulunan Kronik Rahatsızlıklar'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="usedMedications" placeholder='Düzenli Kullanılan İlaçlar'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="operations" placeholder='Geçirilen İşlemler / Ameliyatlar'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="allergies" placeholder='Besin Alerjileri'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="physicalActivity" placeholder='Günlük Fiziksel Aktiviteler'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="sleepPattern" placeholder='Uyku Düzeni'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="digestiveSystem" placeholder='Sindirim Sistemi Problemleri'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="stomachDamaging" placeholder='Mideye Rahatsızlık Veren Yiyecek ya da İçecekler'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="mealPlanning" placeholder='Öğün Düzeni'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="skippedMeal" placeholder='Genellikle Atlanan Öğün'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="snacks" placeholder='Atıştırma Alışkanlıkları'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="essentialFood" placeholder='Vazgeçilmez Besin ya da Besinler'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="notConsumedFood" placeholder='Tüketilmeyen Besin ya da Besinler'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="nightEatingHabits" placeholder='Gece Yemek Yeme Alışkanlığı'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="psychologicalState" placeholder='Psiklojik Durumun Beslenme Üzerindeki Etkisi'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="wateAmount" placeholder='Günlük Su Tüketim Miktarı'  ></textarea>
                </div>


                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="teaCoffeAmount" placeholder='Günlük Çay ve Kahve Tüketim Miktarı'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="mineralWaterAmount" placeholder='Günlük Maden Suyu Tüketim Miktarı'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="sodaAmount" placeholder='Günlük Asitli İçecek Tüketim Miktarı'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="sugarAmount" placeholder='Günlük Şeker Tüketim Miktarı'  ></textarea>
                </div>

                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="alcoholAmount" placeholder='Günlük Alkol Tüketim Miktarı'  ></textarea>
                </div>

            </div>

        </form>

    )
}

export default ProfileDetailsForm

