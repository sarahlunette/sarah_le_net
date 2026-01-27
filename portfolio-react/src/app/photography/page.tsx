'use client'

import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

const images = [
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczMhkf9nN6_MmQIc3OCbAANEhmL1LwklY7oMTuQ-Yx9jh0953GrkNq-y6NJO1JiGYgWRjfKgx6aR5GqkP4MsxB2WEkoo9JK9b-q3PX7RVcoMjKNEBzPJwdqMcUgydsOK2INlNIETVOxBzB2aJTLM0SVXkw=w1112-h1478-s-no-gm?authuser=0',
    caption: 'Agio Georgious, Thessaloniki'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczNRCNr1sm096q8jdQPG-gx9g_MDpRjLJWJknspSQRBgx3mYTdAm5KPJZ2wygHc8p5c3iohOAvZ8PqgdVoh4FjvrxYtIkK1ChW2KP0rU4NIDYsNkkziIa4wNJw3-NYCJeqBK5NzByXeGw5P6uf2nrRfRrQ=w2040-h1478-s-no-gm?authuser=0',
    caption: 'Stoa, Athina'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczPcjg1GIx7PoASOGAlzQ_XeRd9PXwofIuO3DNpGQBhRHbpPj1o35OoKcbx_lz1ruF5w4FVGaXFEOjjQ4bQkJk1WEjdBgwWNGrB2PVXdF04x2kz_TbSlU_FUvdoRw5E7pFLlSu9o3vbhRb84n1KuCUtTMQ=w1962-h1478-s-no-gm?authuser=0',
    caption: 'Antique theater, Athina'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczO_y8sjfF8INYFxUw7gvj4CxewCZQ6Qeq3i-3eNoG7pCWmPbAbGTcygJs8F7xKcJ-KO_Fs4rfL3HjtISdxNffq1mVbv71nnVjHCCHmF7vuSUUWEt_eO498byjUzC-qzV8_xsm1fiH2_7gXwV9CW-vu4DA=w1112-h1478-s-no-gm?authuser=0',
    caption: 'Statue'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczNzIRyCFb4qD0lu4autGqczk-njAwvSkcJBERB_KKQblkbPSU6aRFJWhMh05tCmR-4MnHlMDN1k3SkIysbyAScWpEnZqIVp2aSjxwTJNZQftsuYDuE6t85JrPZFzvj7jPmPSmUleFVmxt5sxBp5QsoKxw=w1112-h1478-s-no-gm?authuser=0',
    caption: 'Delphi'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczOfP1bG2zBPxHVTVzCPLxoe2J9IlxCCXhTaChWle2i67xbWriqHHELQ0iBu6ezczZ7R85uCjApmtQ7cItfXo4vW4hW1Ycjp96Tz7FG_cdOCkvr0apH0aEYC7kkRXADLv-5Tv47ZoWc3RnHoF_rhDUatsw=w1962-h1478-s-no-gm?authuser=0',
    caption: 'Ermass'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczMnw80r_tLtdtEsx2MsziCX7VDVjYywNaAKH6OsnhyRYLPVWOCb4LKqD9n9w_b6xTipjim38bXqhjKSY3APvmKEOR1zGubcxD60GDPbFXd7CncSeSiyzmuP-h_NUZwjMvLtbcTlq2os-e_PnGH4SMAVJA=w1112-h1478-s-no-gm?authuser=0',
    caption: 'Petrettini'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczMxHtXqYbumOOZpw9p1u7tN9M6YYVx2JoYYK9qu1Q9-gQ0bL5-BW6rkuiLpgaKz2GAUBSboP-e9s6YibyD2ZMJdnobNgEapUxBTsiZSb8DRa3GwuppwK8xvmi3XL59qhKu2lUTgeh5P5M_QvHwfrfNq5A=w1112-h1478-s-no-gm?authuser=0',
    caption: 'Petrettini'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczOBl2gfZrgbqNcRpAjYT_waQkDqn_WsvrQARGAn8xjhP5o_SxHUDrCekgiW7VTWFUbV2HaLoyOknYKsH7EIFuTwTaRBsZYVZGofkYSFpXQLdGvd3pTcPmZLMMDRh_izL5RPQ7AtnTjw9oO_I1wUYr0g-g=w1962-h1478-s-no-gm?authuser=0',
    caption: 'Boat'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczMjmgHHRXy57IfN-HXaDQ-vgJp3oSVJg25WJ1CuIBwtIQiJMlmzbout9asoC_mDukEqcJUEPlVUmQBodTdR3KifQGFsJ2pdXL3fB3L4KDYyFnU4j00toJSa-uvihFB2bBb826QaK-9mqwpcIrGrd3I35A=w1962-h1478-s-no-gm?authuser=0',
    caption: 'Synagogue Corfu'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczM6i6QVcp2K3FltezApohm3mMdtRHryXfvrgy3t5sb-EViYDhf_lgadlbLlMr9gokPd982SjSsD9qDxzOyf7vtlV21DnH-k1q80LXqlROYaKGyY28mJmswpVSyI2YOgaVZcGjvpHea_JWlHT28VKWfOfg=w1112-h1478-s-no-gm?authuser=0',
    caption: 'Ferry'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczPjKqgKGcQSS_i08_pWLlYPT5ApW3RzYPG23AhvnXpi6K4QPDGyy6QrwNS_khPaRrQXTf0IAtsHvwt5iibyFX9VanJR4IR8QJKN9e_Wv7DmNPojfkFTUHAO9-yf63k_EG70NV4dyyIoSqt0fKD8x0HR5g=w1962-h1478-s-no-gm?authuser=0',
    caption: 'Corfu town'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczO4E4pSVf_SELxEzNHYi15ann5ly3egOPpTbcQ_aAmgoRnhy3D7LtgfG0TS80rGoea9W1Kfc_D8q11n5iqdB7UiOV8E5hkUgsNamRN32cTqAIGyln62oZHfrnz6ccx4AkqsLXMWhO84GSpFYWj855tBVw=w1962-h1478-s-no-gm?authuser=0',
    caption: 'Ostuni'
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/AP1GczMeZkBYKc9j2SFzndcOkawoDle2kxN2NwT9j6nO9lJLpnd4rtYXBF95OiJm6x9xmWGC8MUHJqKNxAURQbqXVu6KfML9PmbXZQTRBO-_r_Q0G4x90FX3wUzdAH8oDUBQerQvXD-P0TohPiWwzim12GlEBA=w1962-h1478-s-no-gm?authuser=0',
    caption: 'Ferry Bari'
  }
]

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Camera className="w-12 h-12 text-slate-600" />
            <h1 className="text-5xl font-bold text-gray-900">Photography</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.caption}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-slate-50 to-white">
                  <p className="text-sm font-medium text-gray-700 text-center">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
