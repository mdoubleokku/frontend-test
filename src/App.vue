<template>
<v-app>
    <v-navigation-drawer
      enable-resize-watcher app
      class="purple"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      dark
    >
       <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
      <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
        </v-list-group>
        
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
        <v-list-item
          v-for="[icon, text] in settingList"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <DashBoard/>
    </v-main> 
</v-app>
</template>

<script>
import DashBoard from './components/DashBoard';

export default {
  name: 'App',

  components: {
    DashBoard,
  },

  data: () => ({
      drawer: true,
      mini: true,
      items: [
        {
          action: 'mdi-cash-multiple',
          active: true,
          items: [
            { title: 'Eearnings Sumary' },
            { title: 'My Reverals' },
            { title: 'Payment History' },
            { title: 'Tax Center' }
          ],
          title: 'Eernings'
        }
      ],
      links: [
        ['mdi-folder-outline', 'Portfolio'],
        ['mdi-tag-outline', 'Promotion'],
        ['mdi-tooltip-text-outline', 'Insight'],
        ['mdi-file-upload-outline', 'Upload'],
      ],
      settingList: [
        ['mdi-cog-outline', 'Settings'],
        ['mdi-logout', 'Log Out']
      ]
  }),
};
</script>

<style scoped>

.purple {
  background-color: #2f2ee1!important;
}

</style>
