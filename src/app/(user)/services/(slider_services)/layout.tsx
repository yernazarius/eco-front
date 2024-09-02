import VerticalSliderMenu from '@/components/VerticalSliderMenu'


const menuItems = [
    { href: '/services/verification-measurement', label: 'Поверка средств измерений' },
    { href: '/services/faq-equipment', label: 'FAQ оборудование' },
    { href: '/services/electronic-brochures', label: 'Электронные брошюры' },
    { href: '/services/quality-certificates', label: 'Паспорта качества' },
    { href: '/services/smart-solutions-labs', label: 'Умные решения для вашей лаборатории' },
    { href: '/services/service-maintenance', label: 'Сервисное обслуживание ваших приборов' },
    { href: '/services/online-industrial-solutions', label: 'Промышленные решения ON-LINE' },
]

const MyPage = () => {
    return (
        <div>
            <VerticalSliderMenu items={menuItems} />
            {/* Other content */}
        </div>
    )
}

export default MyPage
