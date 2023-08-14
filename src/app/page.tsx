import { Theme, Flex, Text, Button } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
      <Theme
        accentColor="grass"
        grayColor="gray"
        panelBackground="solid"
        scaling="100%"
        radius="medium">
        <Flex gap="4" align="center">
          <Button variant="solid">Get started</Button>
          <Button variant="soft">Get started</Button>
          <Button variant="ghost">Get started</Button>
        </Flex>
      </Theme>
    </main>
  );
}
