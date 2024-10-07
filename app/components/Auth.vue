<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types'

const toast = useToast()
const supabase = useSupabaseClient()
const loading = ref(false)

const state = reactive({
  email: '',
})

function validate(state: any): FormError[] {
  const errors = []
  if (!state.email)
    errors.push({ path: 'email', message: '' })
  return errors
}

async function handleLogin(_event: FormSubmitEvent<any>) {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: state.email })
    if (error)
      throw error
    toast.add({
      id: 'check_email_login',
      title: 'Check your email for the login link!',
      icon: 'i-heroicons-envelope',
    })
  }
  catch (error: any) {
    toast.add({
      id: 'login_error',
      title: error.error_description || error.message,
      icon: 'i-heroicons-x-mark',
    })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex items-start justify-center min-h-screen pt-48">
    <UForm
      :validate="validate"
      :state="state"
      class="p-8 rounded-lg shadow-md border border-gray-300 w-full max-w-md"
      @submit="handleLogin"
    >
      <h1 class="text-2xl font-bold mb-4 text-center">
        {{ $t('vuebox_login') }}
      </h1>
      <p class="text-gray-400 mb-6 text-center">
        {{ $t('signin_magic_link') }}
      </p>
      <UFormGroup label="Email" name="email" class="mb-4">
        <UInput v-model="state.email" type="email" placeholder="example@email.com" />
      </UFormGroup>
      <div class="flex justify-center">
        <UButton size="xl" type="submit">
          {{ $t('send_magic_link') }}
        </UButton>
      </div>
    </UForm>
  </div>
</template>
