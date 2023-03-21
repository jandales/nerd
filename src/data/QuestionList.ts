import { Question, PrivacyPolicy  } from "@/contracts/Interface"

export const QuestionList: Question[] = [
  { 
    question: 'What isNerd.io?',
     answer : 'Nerd.io.to is a file hosting provider. We offer online storage/remote backup capacity, sophisticated uploading and downloading tools. WithNerd.io you can host files, images, videos, audio and flash on the same place.'
  },
  {
    question: 'Why should I useNerd.io?',
    answer: `Whenever you need to send a file that is too large for e-mail,Nerd.io can help. If you need secure remote storage capacity for off-site backups,Nerd.io offers solutions for you. If you want to access personal data from a variety of computers and don't want to carry around a USB stick,Nerd.io is a perfect way of doing so.`
  },
   {
    question: 'Why should I useNerd.io?',
    answer: `Whenever you need to send a file that is too large for e-mail,Nerd.io can help. If you need secure remote storage capacity for off-site backups,Nerd.io offers solutions for you. If you want to access personal data from a variety of computers and don't want to carry around a USB stick,Nerd.io is a perfect way of doing so.`
  },
  {
    question: 'Can I search for files other people uploaded?',
    answer : 'No, because not everyone wishes to share the files they upload with everyone else. This wayNerd.io can be used to share files with anyone you choose to, as well as keep it for yourself as a backup or to download from anywhere in the world.'
  },
  {
    question: 'What kind of files can be uploaded?',
    answer : 'All kinds: from your party photos to an important document. The only restrictions are for pornography, nudity, sexual images and any kind offensive material, and, of course, copyrighted material. Please refer to our TOS for more info onNerd.io terms of service.'
  },
  {
    question: 'How to delete a file I uploaded?',
    answer: 'o delete a file you uploaded you must use Delete Link that was provided to you after the upload proccess. If you lost your removal code you can simply wait until the file expires so it will be automatically removed from our site.'
  },
  {
    question: 'Can I hotlink the stuff I upload?',
    answer: 'No. Hotlinking is not allowed on any kind of files uploaded to our servers.'
  },
  {
    question: 'I still have questions, what should I do?',
    answer: `If you still have questions regarding our services don't hesitate to contact us using our`,
    link : '#'
  }

]




export const PrivacyList: PrivacyPolicy[] = [
    {
        title: 'Scope of application',
        description: [
            `This data privacy statement shall not be part of the general terms and conditions and shall apply for the online offer of Nerd.io under the domain www.Nerd.io. The data privacy provisions of Nerd.io shall not apply for the online offers of other service providers.DDL reserves the right to change this data privacy statement at any time without advance notification.`,
        ],
    },
    {
        title: 'Signing on/registration',
        description: [
            `Personal data are collected at signing on/registration of a user. These are the user's email address, the payment method chosen by the user and the associated data required for processing of the payment. The access data of the user are saved by Nerd.io and not passed on to any third parties except where there is a statutory requirement to do so or the user has agreed to it.`
        ]
    },
    {
        title: 'Correspondence via contact form or email',
         description: [`The user is generally free to indicate fictitious data regarding his identity in correspondence. Where actions regarding the user's contract with Nerd.io are required, Nerd.io will require data to uniquely identify the user. If the correspondence by email or contact form is unencrypted, the correspondence will not be protected from unauthorised access.`
        ]
    }
]