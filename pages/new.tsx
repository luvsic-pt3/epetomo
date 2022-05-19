import Nav from '@/components/nav'
import Container from '@/components/container'
import ProfileForm from '@/components/profile-form'

export default function NewEntryPage() {
    return (
        <>
            <Nav title="えぺとも" />
            <Container className="w-full lg:w-2/4">
                <ProfileForm />
            </Container>
        </>
    )
}
